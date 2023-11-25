import type { Config } from 'jest';

const config: Config = {
	verbose: true,
	roots: ['src'],
	testMatch: ['**/?(*.)+(spec|test|steps).+(ts|tsx|js)'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	testTimeout: 180000,
	// setupFiles: ['dotenv/config'],
	maxWorkers: 4,
};

export default config;
