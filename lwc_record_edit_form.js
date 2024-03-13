import { LightningElement ,api } from 'lwc';

export default class Lwc_record_edit_form extends LightningElement {

    @api recordId;

    handledeatils(event)
    {
        var inputs=this.template.querySelectorAll('lightning-input-field');

        inputs.forEach(field=>{field.reset();});
    }
}