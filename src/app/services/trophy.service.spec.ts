import { TestBed } from "@angular/core/testing";

import { TrophyService } from "./trophy.service";

describe("TrophyService", () => {
    let service: TrophyService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.get(TrophyService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});