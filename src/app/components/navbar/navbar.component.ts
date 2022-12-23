import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserService } from 'src/app/service/user.service';
import { AppService } from 'src/app/service/app.service';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    app = this.appService;
    profileVisible: boolean = false;
    menubarItems: any[] = [];
    userInfo = { username: '',name: '' }
    constructor(private userService: UserService,
        private appService: AppService,
        private message: MessageService) { }

    signOut() {
        localStorage.removeItem('token');
        window.location.href = "/sign"
    }

    handleEdit() {
        this.profileVisible = true
    }

    release() {
        this.app.open();
    }

    updateUser() {
        this.userService.updateUser(this.userInfo).subscribe(res => {
            if(res.success) {
                this.message.add({ severity: 'success', summary: 'Profile', detail: res.message });
            } else {
                this.message.add({ severity: 'info', summary: 'Profile', detail: res.message });
            }
            this.profileVisible = false;
            window.location.href = "/sign"
        })
    }

    ngOnInit(): void {
                this.menubarItems = [
                    {
                        label: 'video',
                        className: 'menubar-root',
                        items: [
                            {
                                label: 'Edit',
                                icon: 'pi pi-fw pi-align-left',
                                command: this.handleEdit.bind(this)
                            },
                            {
                                label: 'Quit',
                                icon: 'pi pi-fw pi-times',
                                command: this.signOut
                            },
                        ]
                    },
                    {
                        label: 'video',
                        items: [
                            {
                                label: 'New',
                                command: this.release.bind(this),
                                icon: 'pi pi-fw pi-plus',
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-trash'
                            },
                            {
                                separator: true
                            },
                            {
                                label: 'Share',
                                icon: 'pi pi-fw pi-external-link'
                            }
                        ]
                    },
                    {
                        label: 'Edit',
                        items: [
                            {
                                label: 'Left',
                                icon: 'pi pi-fw pi-align-left'
                            },
                            {
                                label: 'Right',
                                icon: 'pi pi-fw pi-align-right'
                            },
                            {
                                label: 'Center',
                                icon: 'pi pi-fw pi-align-center'
                            },
                            {
                                label: 'Justify',
                                icon: 'pi pi-fw pi-align-justify'
                            },
        
                        ]
                    },
                    {
                        label: 'Events',
                        items: [
                            {
                                label: 'Edit',
                                icon: 'pi pi-fw pi-pencil',
                                items: [
                                    {
                                        label: 'Save',
                                        icon: 'pi pi-fw pi-calendar-plus'
                                    },
                                    {
                                        label: 'Delete',
                                        icon: 'pi pi-fw pi-calendar-minus'
                                    }
                                ]
                            },
                            {
                                label: 'Archieve',
                                icon: 'pi pi-fw pi-calendar-times',
                                items: [
                                    {
                                        label: 'Remove',
                                        icon: 'pi pi-fw pi-calendar-minus'
                                    }
                                ]
                            }
                        ]
                    }
                ];
            } 
      
    
}
