import path from 'path'
import Client from './structures/Client/Client'
import { GatewayIntentBits } from 'discord.js'
import { app, BrowserWindow } from 'electron'

let appWindow: BrowserWindow | null = null
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const client = new Client({
	intents: [GatewayIntentBits.Guilds],
})

const spawnAppWindow = () => {
	const RESOURCES_PATH = app.isPackaged
		? path.join(process.resourcesPath, 'assets')
		: path.join(__dirname, '../../assets')

	const getAssetPath = (...paths: string[]): string => {
		return path.join(RESOURCES_PATH, ...paths)
	}

	appWindow = new BrowserWindow({
		width: 800,
		height: 600,
		icon: getAssetPath('icon.png'),
		show: false,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		},
	})
	appWindow.loadURL(
		app.isPackaged
			? `file://${path.join(__dirname, '../../frontend/build/index.html')}`
			: 'http://localhost:3000'
	)
	appWindow.maximize()
	appWindow.setMenu(null)
	appWindow.show()
	appWindow.on('closed', () => {
		appWindow = null
	})
}

app.on('ready', () => {
	spawnAppWindow()
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})
