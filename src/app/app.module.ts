import 'core-js';
import 'zone.js/dist/zone';

import { ToasterModule } from 'angular2-toaster';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from './services.module';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { EnvironmentComponent } from './accounts/environment.component';
import { HintComponent } from './accounts/hint.component';
import { LockComponent } from './accounts/lock.component';
import { LoginComponent } from './accounts/login.component';
import { PremiumComponent } from './accounts/premium.component';
import { RegisterComponent } from './accounts/register.component';
import { SetPasswordComponent } from './accounts/set-password.component';
import { SettingsComponent } from './accounts/settings.component';
import { SsoComponent } from './accounts/sso.component';
import { TwoFactorOptionsComponent } from './accounts/two-factor-options.component';
import { TwoFactorComponent } from './accounts/two-factor.component';

import { CalloutComponent } from 'jslib/angular/components/callout.component';
import { IconComponent } from 'jslib/angular/components/icon.component';
import { ModalComponent } from 'jslib/angular/components/modal.component';

import { A11yTitleDirective } from 'jslib/angular/directives/a11y-title.directive';
import { ApiActionDirective } from 'jslib/angular/directives/api-action.directive';
import { AutofocusDirective } from 'jslib/angular/directives/autofocus.directive';
import { BlurClickDirective } from 'jslib/angular/directives/blur-click.directive';
import { BoxRowDirective } from 'jslib/angular/directives/box-row.directive';
import { FallbackSrcDirective } from 'jslib/angular/directives/fallback-src.directive';
import { SelectCopyDirective } from 'jslib/angular/directives/select-copy.directive';
import { StopClickDirective } from 'jslib/angular/directives/stop-click.directive';
import { StopPropDirective } from 'jslib/angular/directives/stop-prop.directive';
import { TrueFalseValueDirective } from 'jslib/angular/directives/true-false-value.directive';

import { ColorPasswordPipe } from 'jslib/angular/pipes/color-password.pipe';
import { I18nPipe } from 'jslib/angular/pipes/i18n.pipe';
import { SearchCiphersPipe } from 'jslib/angular/pipes/search-ciphers.pipe';

import { AddEditComponent } from './vault/add-edit.component';
import { AttachmentsComponent } from './vault/attachments.component';
import { CiphersComponent } from './vault/ciphers.component';
import { CollectionsComponent } from './vault/collections.component';
import { ExportComponent } from './vault/export.component';
import { FolderAddEditComponent } from './vault/folder-add-edit.component';
import { GroupingsComponent } from './vault/groupings.component';
import { PasswordGeneratorHistoryComponent } from './vault/password-generator-history.component';
import { PasswordGeneratorComponent } from './vault/password-generator.component';
import { PasswordHistoryComponent } from './vault/password-history.component';
import { ShareComponent } from './vault/share.component';
import { VaultComponent } from './vault/vault.component';
import { ViewComponent } from './vault/view.component';

import { AccessComponent } from './send/access.component';
import { AddEditComponent as SendAddEditComponent } from './send/add-edit.component';
import { SendComponent } from './send/send.component';

import { registerLocaleData } from '@angular/common';
import localeBe from '@angular/common/locales/be';
import localeBg from '@angular/common/locales/bg';
import localeCa from '@angular/common/locales/ca';
import localeCs from '@angular/common/locales/cs';
import localeDa from '@angular/common/locales/da';
import localeDe from '@angular/common/locales/de';
import localeEl from '@angular/common/locales/el';
import localEnGb from '@angular/common/locales/en-GB';
import localeEs from '@angular/common/locales/es';
import localeEt from '@angular/common/locales/et';
import localeFa from '@angular/common/locales/fa';
import localeFi from '@angular/common/locales/fi';
import localeFr from '@angular/common/locales/fr';
import localeHr from '@angular/common/locales/hr';
import localeHu from '@angular/common/locales/hu';
import localeId from '@angular/common/locales/id';
import localeIt from '@angular/common/locales/it';
import localeJa from '@angular/common/locales/ja';
import localeKo from '@angular/common/locales/ko';
import localeMl from '@angular/common/locales/ml';
import localeNb from '@angular/common/locales/nb';
import localeNl from '@angular/common/locales/nl';
import localePl from '@angular/common/locales/pl';
import localePtBr from '@angular/common/locales/pt';
import localePtPt from '@angular/common/locales/pt-PT';
import localeRo from '@angular/common/locales/ro';
import localeRu from '@angular/common/locales/ru';
import localeSr from '@angular/common/locales/sr';
import localeSk from '@angular/common/locales/sk';
import localeSv from '@angular/common/locales/sv';
import localeTh from '@angular/common/locales/th';
import localeTr from '@angular/common/locales/tr';
import localeUk from '@angular/common/locales/uk';
import localeVi from '@angular/common/locales/vi';
import localeZhCn from '@angular/common/locales/zh-Hans';
import localeZhTw from '@angular/common/locales/zh-Hant';

registerLocaleData(localeBe, 'be');
registerLocaleData(localeBg, 'bg');
registerLocaleData(localeCa, 'ca');
registerLocaleData(localeCs, 'cs');
registerLocaleData(localeDa, 'da');
registerLocaleData(localeDe, 'de');
registerLocaleData(localeEl, 'el');
registerLocaleData(localEnGb, 'en-GB');
registerLocaleData(localeEs, 'es');
registerLocaleData(localeEt, 'et');
registerLocaleData(localeFa, 'fa');
registerLocaleData(localeFi, 'fi');
registerLocaleData(localeFr, 'fr');
registerLocaleData(localeHr, 'hr');
registerLocaleData(localeHu, 'hu');
registerLocaleData(localeId, 'id');
registerLocaleData(localeIt, 'it');
registerLocaleData(localeJa, 'ja');
registerLocaleData(localeKo, 'ko');
registerLocaleData(localeMl, 'ml');
registerLocaleData(localeNb, 'nb');
registerLocaleData(localeNl, 'nl');
registerLocaleData(localePl, 'pl');
registerLocaleData(localePtBr, 'pt-BR');
registerLocaleData(localePtPt, 'pt-PT');
registerLocaleData(localeRo, 'ro');
registerLocaleData(localeRu, 'ru');
registerLocaleData(localeSk, 'sk');
registerLocaleData(localeSr, 'sr');
registerLocaleData(localeSv, 'sv');
registerLocaleData(localeTh, 'th');
registerLocaleData(localeTr, 'tr');
registerLocaleData(localeUk, 'uk');
registerLocaleData(localeVi, 'vi');
registerLocaleData(localeZhCn, 'zh-CN');
registerLocaleData(localeZhTw, 'zh-TW');

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        ServicesModule,
        Angulartics2Module.forRoot({
            pageTracking: {
                clearQueryParams: true,
            },
        }),
        ToasterModule.forRoot(),
        InfiniteScrollModule,
        DragDropModule,
    ],
    declarations: [
        A11yTitleDirective,
        AccessComponent,
        AddEditComponent,
        ApiActionDirective,
        AppComponent,
        AttachmentsComponent,
        AutofocusDirective,
        BlurClickDirective,
        BoxRowDirective,
        CalloutComponent,
        CiphersComponent,
        CollectionsComponent,
        ColorPasswordPipe,
        EnvironmentComponent,
        ExportComponent,
        FallbackSrcDirective,
        FolderAddEditComponent,
        GroupingsComponent,
        HintComponent,
        I18nPipe,
        IconComponent,
        LockComponent,
        LoginComponent,
        ModalComponent,
        PasswordGeneratorComponent,
        PasswordGeneratorHistoryComponent,
        PasswordHistoryComponent,
        PremiumComponent,
        RegisterComponent,
        SearchCiphersPipe,
        SelectCopyDirective,
        SendAddEditComponent,
        SendComponent,
        SetPasswordComponent,
        SettingsComponent,
        ShareComponent,
        SsoComponent,
        StopClickDirective,
        StopPropDirective,
        TrueFalseValueDirective,
        TwoFactorComponent,
        TwoFactorOptionsComponent,
        VaultComponent,
        ViewComponent,
    ],
    entryComponents: [
        AttachmentsComponent,
        CollectionsComponent,
        EnvironmentComponent,
        ExportComponent,
        FolderAddEditComponent,
        ModalComponent,
        PasswordGeneratorComponent,
        PasswordGeneratorHistoryComponent,
        PasswordHistoryComponent,
        PremiumComponent,
        SettingsComponent,
        ShareComponent,
        SendAddEditComponent,
        TwoFactorOptionsComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
