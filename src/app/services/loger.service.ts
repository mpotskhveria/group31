import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class LogerService{


    loger(){
        console.log(`Lorem Ipsum is simply dummy text of the printing and typese
        tting industry. Lorem Ipsum has been the industr
        y's standard dummy text ever since the 1500s, w
        hen an unknown printer took a galley of type and s
        crambled it to make a type specimen book. It has surv
        ived not only five centuries, but also the leap into el
        ectronic typesetting, remaining essentially unchanged. It was 
        popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldu
        s PageMaker including versions of Lorem Ipsum.`)
    }
}