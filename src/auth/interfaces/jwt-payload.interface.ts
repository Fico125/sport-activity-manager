export interface JwtPayload {
  sub: string; // subject and is the identifier for the token
  iat?: number; // issued at
  exp?: number; // expiration time
}
