// showLog.ts
type LogLevel = 'error' | 'success' | 'info' | 'warn' | 'debug' | string;

interface ShowLogOptions {
    label: LogLevel;
    color?: string;
}

export function cls(message: string, options: ShowLogOptions): void {

    const env = process.env.NODE_ENV || process.env.REACT_APP_NODE_ENV;
    if (env !== 'development') {
        return;
    }

    const { label, color } = options;
    let colorCode: string;

    const colorMap: { [colorName: string]: string } = {
        'red': '\x1B[31m',
        'green': '\x1B[32m',
        'blue': '\x1B[34m',
        'yellow': '\x1B[33m',
        'purple': '\x1B[35m',
        // Add more colors as needed
    };

    if (color && colorMap[color]) {
        colorCode = colorMap[color];
    } else {
        switch (label) {
            case 'error': colorCode = colorMap['red']; break;
            case 'success': colorCode = colorMap['green']; break;
            case 'info': colorCode = colorMap['blue']; break;
            case 'warn': colorCode = colorMap['yellow']; break;
            case 'debug': colorCode = colorMap['purple']; break;
            default: colorCode = ''; break;
        }
    }

    console.log(`${colorCode}${label.toUpperCase()}: ${message}\x1B[0m`);
}

