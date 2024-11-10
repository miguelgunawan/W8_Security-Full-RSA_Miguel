const crypto = require('crypto');

const alicePrivateKeyPem =  `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCl+E/KiKpeepzd
BF1vzku0G/GUaXjNgrn8rSoViP2n6jjWbKa8bD/IlU4/xhxhJA2zGjvyc8NkOiKt
P34hzkWcxL8jHM7m8qTk5rdRrjRLyzwnLY2hjMFEKlERhn0UgZH5iidjcLIIihYF
V6891zXvrjIk22RcsnUaexn/AI+eWX2xcqIIO3UHg5+NsJXt/19PhwUureVPwB6M
e7VM5O7lOIn0u9sgrQWp9XIwf9qIoxhdKRXvpj3pehmffzUbY3dB9V7GWp4rUmG3
PvQoINb19kMyLOb9vR6uK+ifYmtBCP3lIxTBQJ8D1mkngndjX3s15dxoXsvTn678
ZVHYdcNVAgMBAAECggEAFosmchO4fyciGcacgccgiEvdYgkmLqqpjvU0c1gNYEVT
yBMFCNtJRKURy7Qh/wiHJdiT452uy3U2vZfouY3LmHzZm4WFDbX6s4QqdVlMuC4t
swKggMeI1DSimKykXmiFG+3p5hC/gKJvqvUbPrKgnGLpuRDlznjc/XuoGczeinr+
0zGvcjTdFDVO479AVzLZeWpIBx6nvgY7kjWV7EzbOxRXRxaWPHp8mafQ7P/R6d9c
vL3ptln5sdh8oq9SPKkgdO3laCk2mQJoVCV7tZ60MZeYCFIS2umbolIfw3bhIqYF
L0osXeFGYLsi97k25qR3iXjkbbB01yHLpedT3zv7hwKBgQDhA7uazUWgCbVz8ADi
/eIg4cpVE1+n/ZEVGcJCgtMcGbSbHRDZMJinHtYCiMJWz5pPNPwoK1g1Va/B0VKw
QBFigFCKxYo+pDrMqiqmlhrG/7J0m/y+yPUjgNEI+JEkPWoc9WP5/ehaFcoXCxjC
vttROxY05yhh7gbi3zWlwuvBwwKBgQC80x/KQHfYE3kZ3aZg+o67mbD4erSWv7M+
rSHnVvZFsfKEUJhR4POAVb7OeKWHKdb2xh7QjPCmVwTu8/8yy8L49cgiKUwRmyB1
ccHfO2vMsC7B2qTN9XO6ZZHWavBgXlCA0WV5sSzYvxcqmyxorqNcg6igquQj/2m3
jkmuSEg9BwKBgQDCelp0YkRyHNISwXXSusHtz5jzzQnZBQSXKytGFxJlcCY0Bnwg
a6sUjkdD63WkWEwzd0UVZtkXR9bfeo6wPL+J1gNG3ZMtrv4PFGhGkOfV5PwVYxig
wMl3BQgma8fufZIwMztUv0pKShjfr7yX3SNrYtk/oia59WNIRMl2WjEvxwKBgBL1
T5fK6T10lxAVxQKvpW0IfVA1YbRRAvoj/+duP8O3nhXS0bhG0avs7/9i9Zugg8i7
E5T00aSh0Aj9zn2XH7hHVRS4+L47yQKBrWlwWd5vQgKMpUdYgYoRcJcKnZ/PWF3W
qE2TkGEirnzEn6zS++vp/CBFiCplFoQrcRJih345AoGAIVpP+XURwotld/y5X6Mg
5oFqG+IP3Az12GtOpTntzG+C9Bdb5n5oPhkG3GTHc9WdZwvhrH+wDEQKW4byYBl+
pTJ4BxMrCCgXLcVApEG9VzgVSigD/QK8WKA/8b8AzOgrqNxiMfQVk2ipD9ugpYOn
I70eDmzf3mAWJehUTa0y/lI=
-----END PRIVATE KEY-----`

const alicePrivateKey = crypto.createPrivateKey(alicePrivateKeyPem);

const bobPublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2zJz/2NCbLAksJXb++IH
Idrb2tmiNdZM5KhfJB+AjBbb/HItdjsrLswbMTBn4J9b/Gd87SxiNWmP+rHEOnp1
cqeO0qHYHy05A/X/azpfh78LNzyannjMBaDt3KxKBrkgNQO132fcNfHLyQX6kLHb
VDEtGfMP7/O5AuDP9LBcESN/5xO/rDqfX28Fn0B/gXWjSG2avg85LzslO2izCVJ2
o7U0vZZIrG+zaae6cMMk0EYKwygyckBJ1CuPZFiKMhYqbY8lHCmFanZArl74svPE
p5iqbxNHa6sIQnWSocHeOXzMfjJw79R0jtzYHWyOZ+xLP4bVDX0P7XwBUsImKaGi
aQIDAQAB
-----END PUBLIC KEY-----`

const bobPublicKey = crypto.createPublicKey(bobPublicKeyPem);
const message = "i want some apples";
const data = Buffer.from(message);

const signature = crypto.sign("sha256", data, alicePrivateKey);
console.log("Signature:", signature.toString("hex"));
const ciphertext = crypto.publicEncrypt(bobPublicKey, data);
console.log("Message:", ciphertext.toString("hex"));