import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs'
const lib = loadStdlib();

const strtngBal = lib.parseCurrency(100)
const accAlice = await lib.newTestAccount(strtngBal)

console.log('Lauching contract');
const ctcAlice = accAlice.contract(backend);

console.log('Starting backends');

const users = [];

const newBob = async (who) => {
		const acc = await lib.newTestAccount(strtngBal);
		const ctc = acc.contract(backend, ctcAlice.getInfo());
		users.push(acc.getAddress());
};

const genParticipants = async (n) => {
		let usercount = n, id = 1;
		for (usercount; usercount > 0; usercount--, id++)
				await newBob(`Bob${id}`)
		console.log(users)
};

await ctcAlice.p.Alice({
		ready: ()=>{
					console.log('Alice is ready  to accept attachers');
					genParticipants(10);
				},
})
