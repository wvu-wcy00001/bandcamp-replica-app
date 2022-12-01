import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../share/services/database.service';
import { LivestreamCardModel } from '../home/content/livestreams/lscard/lscard.model'

@Component({
    selector: 'route-admin',
    templateUrl: './admin.route.html',
    styleUrls: ['./admin.route.css']
})
export class AdminRoute implements OnInit {
    
    constructor(private db: DatabaseService) { }
    
    ngOnInit(): void {
    }
    
    submitNewLivestreamCard(card: LivestreamCardModel): void {
        this.db.addEntries<LivestreamCardModel>('livestreams', [card]);
    }
}
