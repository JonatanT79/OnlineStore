/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ViewProductComponent } from './view-product.component';

let component: ViewProductComponent;
let fixture: ComponentFixture<ViewProductComponent>;

describe('view-product component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ViewProductComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ViewProductComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});