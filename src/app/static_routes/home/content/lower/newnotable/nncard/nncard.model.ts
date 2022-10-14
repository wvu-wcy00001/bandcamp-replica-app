export class NewNotableCardModel {
    albuminfo_url: string;
    albumart_url: string;
    albumname: string;
    albumartist: string;
    albumgenre: string;
    albumdescr: string;

    constructor(albuminfo_url: string, albumart_url: string, albumname: string,
                albumartist: string, albumgenre: string, albumdescr: string) {
        this.albuminfo_url = albuminfo_url;
        this.albumart_url = albumart_url;
        this.albumname = albumname;
        this.albumartist = albumartist;
        this.albumgenre = albumgenre;
        this.albumdescr = albumdescr;
    }
}
