import Account from '../db/entities/account';

export type AccountDto = {
    address: string;
};

export function AccountDto(account: Account) {
    return {
        address: account.address,
    };
}
