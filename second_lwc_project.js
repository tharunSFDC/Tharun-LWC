import { LightningElement } from 'lwc';

export default class Second_lwc_project extends LightningElement {


    newvalue='Tharun Panguluru';

    handle(event)
    {
        this.newvalue=event.target.value;

    }

    clickhere(event)
    {
        alert('Welcome To Salesforce Tharun Panguluru for First LWC')
        

    }
}