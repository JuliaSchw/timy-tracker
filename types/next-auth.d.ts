import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Extends the built-in session types with the custom user fields.
   */
  interface Session {
    user: {
      id: number;
      email?: string;
      surname?: string; // Add your custom fields here
      // You can add other custom fields that you might need
    };
  }
}
