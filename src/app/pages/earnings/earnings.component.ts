import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-earnings',
    templateUrl: './earnings.component.html',
    styleUrls: ['./earnings.component.css']
})
export class EarningsComponent implements OnInit {
    totalEarnings: number = 1500;
    donations: number = 600;
    subscriptions: number = 900;
    earningsByDate: { date: string, amount: number }[] = [];

    ngOnInit() {
        this.earningsByDate = [
            { date: 'Noviembre 2024', amount: 150 },
            { date: 'Octubre 2024', amount: 200 },
            { date: 'Septiembre 2024', amount: 250 },
        ];
    }
}