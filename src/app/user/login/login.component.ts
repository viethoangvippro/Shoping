import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CanActivate, Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string | any;
  password: string | any;
  errorMessage: string | any;
  role: any;
  users: any[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {}
  onSubmit(): void {
    if (this.userService.login(this.username, this.password)) {
      // Nếu đăng nhập thành công, chuyển hướng đến trang tương ứng với vai trò của người dùng
      if (this.userService.isAdmin()) {
        this.router.navigate(['/admin']);
      } else if (this.userService.isEmployee()) {
        this.router.navigate(['/staff']);
      } else {
        this.router.navigate(['/userlogin']);
      }
    } else {
      // Nếu đăng nhập thất bại, hiển thị thông báo lỗi
      alert('Sai tài khoản hoặc mật khẩu');
    }
  }

  // Submit(): void {
  //   this.userService.login(this.username, this.password).subscribe(
  //     (response: { role: string }) => {
  //       localStorage.setItem('role', response.role);
  //       if (response.role === 'admin') {
  //         this.router.navigate(['/admin']);
  //       } else if (response.role === 'staff') {
  //         this.router.navigate(['/staff']);
  //       } else {
  //         this.router.navigate(['/user']);
  //       }
  //     },
  //     (error: any) => {
  //       this.errorMessage = error;
  //     }
  //   );
  // }
}

export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class StaffGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const role = localStorage.getItem('role');
    if (role === 'staff' || role === 'admin') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const role = localStorage.getItem('role');
    if (role === 'user' || role === 'staff' || role === 'admin') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  // onSubmit() {
  //   this.userService.login(this.username, this.password).subscribe(
  //     (response) => {
  //       console.log('Login successful:', response);
  //       // Lưu thông tin đăng nhập vào localStorage hoặc sessionStorage
  //     },
  //     (error) => {
  //       console.log('Login failed:', error);
  //       // Hiển thị thông báo lỗi đăng nhập
  //     }
  //   );
  // }
}
