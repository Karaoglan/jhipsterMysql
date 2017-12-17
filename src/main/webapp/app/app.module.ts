import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterMysqlSharedModule, UserRouteAccessService } from './shared';
import { JhipsterMysqlAppRoutingModule} from './app-routing.module';
import { JhipsterMysqlHomeModule } from './home/home.module';
import { JhipsterMysqlAdminModule } from './admin/admin.module';
import { JhipsterMysqlAccountModule } from './account/account.module';
import { JhipsterMysqlEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterMysqlAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterMysqlSharedModule,
        JhipsterMysqlHomeModule,
        JhipsterMysqlAdminModule,
        JhipsterMysqlAccountModule,
        JhipsterMysqlEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterMysqlAppModule {}
