import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    silent: true,
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    extensionsToTreatAsEsm: ['.ts'],
};

export default config;
