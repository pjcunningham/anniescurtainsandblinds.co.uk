"""Offline regeneration: Python 3 + Pillow 13.0.0; run from the repository root.

No processing dependency is required by the website or its build.
"""
import csv
import hashlib
import json
from pathlib import Path

from PIL import Image, ImageOps

SOURCE = Path('migration-source/wp-content/uploads')
OUTPUT = Path('public/images/home')
PHOTOS = [
    ('P065', '2019/01/SittingRoom1_3.jpg', 'patterned-sitting-room-curtain', [480, 960, 1920]),
    ('P059', '2019/01/Kitchen1_1.jpg', 'kitchen-curtain-pair', [640, 1280, 1920]),
    ('P072', '2020/02/sitting-1.jpg', 'corner-roman-blinds', [640, 1280, 1920]),
    ('P021', '2018/10/Long-Compton-curtains-closed.jpg', 'sloping-window-curtains', [640, 960, 1280]),
    ('P038', '2018/10/coxcoon-2-cut.jpeg', 'patterned-curtains-room', [480, 800, 1280]),
]


def main():
    inventory = list(csv.DictReader(Path('migration-review/photography/image-inventory.csv').open(encoding='utf-8')))
    # Check every inventoried original before and after generation, without modifying it.
    def verify_sources():
        for row in inventory:
            assert hashlib.sha256((SOURCE / row['relative_path']).read_bytes()).hexdigest() == row['sha256']

    verify_sources()
    OUTPUT.mkdir(parents=True, exist_ok=True)
    results = []
    for photo_id, source, name, widths in PHOTOS:
        original = SOURCE / source
        with Image.open(original) as opened:
            photo = ImageOps.exif_transpose(opened).convert('RGB')
            variants = []
            for width in widths:
                assert width <= photo.width
                height = round(photo.height * width / photo.width)
                target = OUTPUT / f'{name}-{width}.webp'
                photo.resize((width, height), Image.Resampling.LANCZOS).save(target, 'WEBP', quality=84, method=6)
                variants.append({'file': target.name, 'width': width, 'height': height, 'bytes': target.stat().st_size})
            results.append({'id': photo_id, 'source': source, 'width': photo.width, 'height': photo.height,
                            'bytes': original.stat().st_size, 'variants': variants})
    verify_sources()
    Path('migration-review/photography/optimisation-results.json').write_text(json.dumps(results, indent=2) + '\n', encoding='utf-8')
    print('Generated 15 WebP assets; all 356 inventoried originals unchanged.')


if __name__ == '__main__':
    main()
