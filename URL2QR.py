import sys
import qrcode

"""
USAGE: python URL2QR.py <URL> <output_file>
This script generates a QR code for the given URL and saves it to the specified output file.
"""

def generate_qr(url, output_file):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)

    img = qr.make_image(fill='black', back_color='white')
    img.save(output_file)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python URL2QR.py <URL> <output_file>")
        sys.exit(1)

    url = sys.argv[1]
    output_file = sys.argv[2]
    generate_qr(url, output_file)
    print(f"QR code generated and saved to {output_file}")