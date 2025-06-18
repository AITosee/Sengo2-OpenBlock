const Sengo2 = formatMessage => ({
    name: formatMessage({
        id: 'Sengo2.name',
        default: 'Sengo2',
        description: 'name of Sengo2 vision sensor extension'
    }),
    extensionId: 'Sengo2',
    version: '0.0.3',
    supportDevice: ['arduinoUno','arduinoUnoR4Wifi','arduinoUnoR4Minima', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560', 
        'arduinoEsp32', 'arduinoEsp8266','arduinoEsp32S3',
        'arduinoK210','arduinoK210MaixDock','arduinoK210Maixduino','arduinoLeonardo',
        'arduinoRaspberryPiPico','arduinoRaspberryPiPicoW','arduinoRaspberryPiPico2','arduinoRaspberryPiPico2W'],
    author: 'AiToose',
    iconURL: `assets/sengo2.png`,
    description: formatMessage({
        id: 'Sengo2.description',
        default: 'Sengo2 vision sensor extension for OpenBlock.',
        description: 'Description of Sengo2 vision sensor'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    tags: ['sensor', 'vision'],
    helpLink: 'https://tosee.readthedocs.io/zh/latest/'
});

module.exports = Sengo2; 