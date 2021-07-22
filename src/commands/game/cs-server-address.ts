import { Message } from "discord.js";
import { BaseCommandClass } from "../../BaseCommand";
import { print, deleteDiscMessage } from "../../tools/f";
import { getCsIp } from '../../csserver/server_info';

const commands = ['praccserver', 'server', 'csserver', 'serveradress', 'csserverip', 'ip', 'csip'];

export class CSServerAddressAction extends BaseCommandClass {
    static instance: CSServerAddressAction = new CSServerAddressAction(commands);

    action = (message: Message, options: string[]) => {
        print(message, '**' + getCsIp() + '**');
        deleteDiscMessage(message, 40000, 'csserver');
    }

    help = () => {
        return '**' + this.commands.toString().replace(/,/g, ' | ') + '** Get CS Server IP (Dathost Address)';
    }
}