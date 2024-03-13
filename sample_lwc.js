import { LightningElement } from 'lwc';

export default class Sample_lwc extends LightningElement {

    Name;
    Email;
    Mobile;

    handle(event)
    {
        var stores = this.template.querySelectorAll('lightning-input').value;

        stores.foreach(function(elements)
        {
            if(elements.name=='ename')
            {
                this.ename=elements.value;
            }
            else if (elements.name=='nemail')
            {
                this.nemail=elements.value;
            }
            else if (elements.name=='nMobile')
            {
                this.nMobile=elements.value;
            }
        },this);
    }


}