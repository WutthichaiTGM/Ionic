import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Story {
    id: number;
    storypic: string;
    title: string;
    content: string;
    likevalue: number;
    commentlist: Array<string>;

    // construtor
    constructor(getid: number, getsrc: string, gettitle: string, getcon: string, getLike: number, getcom: string) {
        this.id = getid;
        this.storypic = getsrc;
        this.title = gettitle;
        this.content = getcon;
        this.likevalue = getLike;
        this.commentlist = new Array();

    }
}
