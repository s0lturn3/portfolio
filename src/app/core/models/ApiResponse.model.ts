export class ApiResponse {
  error: boolean = false;
  errorMessage: string = "";
  code: number = 200;
  body?: any = "";
  metadata?: any = "";
}