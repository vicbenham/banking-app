import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { Account } from '../models/account';
import { AccountInfosService } from '../service/account.infos.service';

@Component({
  selector: 'app-account-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './account.infos.component.html',
})
export class AccountInfosComponent {

  private route = inject(ActivatedRoute);
  private accountInfosService = inject(AccountInfosService);

  id = this.route.snapshot.paramMap.get('id')!;

  account = toSignal<Account | undefined>(
    this.route.paramMap.pipe(
      switchMap(params => this.accountInfosService.getAccountById(params.get('id')!))
    ),
    { initialValue: undefined }
  );

}
