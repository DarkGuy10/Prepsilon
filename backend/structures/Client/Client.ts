import { Client as BaseClient, ClientOptions } from 'discord.js'

class Client extends BaseClient {
	constructor(clientOptions: ClientOptions) {
		super(clientOptions)
	}
}

export default Client
