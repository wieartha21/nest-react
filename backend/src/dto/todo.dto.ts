import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class TodoDto {
  // Validates for a non-empty string

  id?: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description?: string;

  @IsString()
  @IsNotEmpty()
  status?: string;

//   @IsString()
//   @IsNotEmpty()
//   public name: string;

//   // Gets only validated if it's part of the request's body
//   @IsString()
//   @IsNotEmpty()
//   @IsOptional()
//   public email: string;

//   // Validates for an integer
//   @IsNumber()
//   public age: number;

//   // Validates for an integer
//   @IsBoolean()
//   public acceptedTOS: boolean;

//   // Validates for a non-empty integer array
//   @IsArray()
//   @IsNumber({ allowNaN: false }, { each: true })
//   @ArrayMinSize(1)
  public nums: number[];
}