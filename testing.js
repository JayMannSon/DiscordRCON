this.connected = false
this.socket = null

function send(msg, identifier, resolve, reject) {
if(!this.connected) return reject('Connection isn\'t established yet')

		let packet = JSON.stringify({
			'Identifier': identifier,
			'Message': msg,
			'Name': 'WebRcon'
		})
		
		this.socket.onerror = () =>  reject('Error in connection establishment')
		this.socket.onmessage = msg => resolve(JSON.parse(msg.data))
		this.socket.send(packet)


}
function cmd(msg, identifier=-1) {
    return new Promise((resolve, reject) => {
			this.send(msg, identifier, resolve, reject)
		})
}
function open(prt, ipv, psw) {
    return new Promise((resolve, reject) => {
			if(!this.connected){
				this.socket = new WebSocket(`ws://${ipv}:${prt}/${psw}`)

				this.socket.onopen = () => {
					if (this.socket.readyState === 1) {
						this.connected = true
						resolve(this.socket)
					}
				}
				this.socket.onerror = () => reject('Error in connection establishment')
			}
			else reject('Connection already established')
		})
}
function then(msg, identifier=-1){
		return ()=> new Promise((resolve, reject) => {
			send(msg, identifier, resolve, reject)
		})
	}