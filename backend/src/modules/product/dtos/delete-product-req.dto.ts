import { ArrayNotEmpty, IsArray, IsString } from "class-validator";

export class DeleteProductReq {
	@IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    ids!: string[];
}