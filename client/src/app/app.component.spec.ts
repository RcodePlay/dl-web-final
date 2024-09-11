import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [
                HttpClient,
                {
                    provide: ActivatedRoute, // Mock ActivatedRoute
                    useValue: {
                        params: of({ id: '123' }), // Mock route parameters
                        queryParams: of({}), // Mock query parameters if needed
                        snapshot: {
                            paramMap: {
                                get: () => '123', // Mock paramMap access
                            },
                        },
                    },
                },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have title', () => {
        const comp = new AppComponent();
        expect(comp.title).toMatch('4. zbor Dzivé Labute');
    });
});
