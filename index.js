const Sengo2 = formatMessage => ({
    name: formatMessage({
        id: 'Sengo2.name',
        default: 'Sengo2'
    }),
    extensionId: 'Sengo2',
    version: '0.1.2',
    supportDevice: ['arduinoUno','arduinoUnoR4Wifi','arduinoUnoR4Minima', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560', 
        'arduinoEsp32', 'arduinoEsp8266','arduinoEsp32S3',
        'arduinoK210','arduinoK210MaixDock','arduinoK210Maixduino','arduinoLeonardo',
        'arduinoRaspberryPiPico','arduinoRaspberryPiPicoW','arduinoRaspberryPiPico2','arduinoRaspberryPiPico2W'],
    author: 'AIToose',
    iconURL: `assets/sengo2.png`,
    description: formatMessage({
        id: 'Sengo2.description',
        default: 'Mainstream AI vision module, supporting QR code and face recognition with built-in learning, in a block shell.',
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    tags: ['sensor', 'AI'],
    helpLink: 'https://tosee.readthedocs.io/zh/latest/'
});

module.exports = Sengo2; 