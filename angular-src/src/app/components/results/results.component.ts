import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-result',
    templateUrl: './results.component.html',
    styleUrls: [ './results.component.scss' ]
})

export class ResultComponent implements OnInit {

    public storedResults:any;
    public resultSub: Subscription;
    public columnsToDisplay: String[] = [];

    constructor(private _search: SearchService) {}

    ngOnInit(): void {
        // this._search.getResults().subscribe(results => this.storedResults = results)
        this._search.resultsSubscription().subscribe(results => {
            console.log('receiving data', results);
            // this.storedResults = results;
            this.storedResults = results.data.result;
            console.log('stored results', this.storedResults);

            this.columnsToDisplay = [];
            for(let key in this.storedResults[0]){
                console.log(this.storedResults);
            }
        });
    }
    
}