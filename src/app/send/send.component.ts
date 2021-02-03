import {
    Component,
    ComponentFactoryResolver,
    NgZone,
    OnInit,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';

import { 
    Router,
    ActivatedRoute 
} from '@angular/router';

import { AddEditComponent } from './add-edit.component';

import { EnvironmentService } from 'jslib/abstractions/environment.service';
import { I18nService } from 'jslib/abstractions/i18n.service';
import { PlatformUtilsService } from 'jslib/abstractions/platformUtils.service';
import { SendService } from 'jslib/abstractions/send.service';

import { ModalComponent } from 'jslib/angular/components/modal.component';
import { SendComponent as BaseSendComponent } from 'jslib/angular/components/send/send.component';

import { BroadcasterService } from 'jslib/angular/services/broadcaster.service';

import { SendView } from 'jslib/models/view/sendView';

const BroadcasterSubscriptionId = 'DesktopVaultComponent';

enum Action {
    None = '',
    Add = 'all',
    Edit = 'edit',
    View = 'view',
}

@Component({
    selector: 'app-send',
    templateUrl: 'send.component.html',
})
export class SendComponent extends BaseSendComponent implements OnInit {
    @ViewChild('sendAddEdit', { read: ViewContainerRef, static: true }) sendAddEditModalRef: ViewContainerRef;

    sendId: string;
    modal: ModalComponent = null;
    showingModal = false;
    action: Action = Action.None;

    constructor(sendService: SendService, i18nService: I18nService,
        platformUtilsService: PlatformUtilsService, environmentService: EnvironmentService,
        broadcasterService: BroadcasterService, ngZone: NgZone,
        private componentFactoryResolver: ComponentFactoryResolver, private router: Router,
        private route: ActivatedRoute) {
        super(sendService, i18nService, platformUtilsService, environmentService, broadcasterService, ngZone);
    }

    async ngOnInit() {
        this.broadcasterService.subscribe(BroadcasterSubscriptionId, (message: any) => {
            this.ngZone.run(async () => {
                switch (message.command) {
                    case 'modalShown':
                        this.showingModal = true;
                        break;
                    case 'modalClosed':
                        this.showingModal = false;
                        break;
                    default:
                        break;
                }
            });
        });

        await this.load();
    }

    addSend() {
        if (this.action === Action.Add) {
            return;
        }

        this.action = Action.Add;
        this.sendId = null;
        this.go();
    }

    editSend(send: SendView) {
        if (this.action === Action.Edit && this.sendId === send.id) {
            return;
        }

        this.action = Action.Edit;
        this.sendId = send.id;
        this.go();
    }

    private go(queryParams: any = null) {
        if (queryParams == null) {
            queryParams = {
                id: this.sendId,
                action: this.action,
            };
        }

        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: queryParams,
            replaceUrl: true,
        });
    }
}
