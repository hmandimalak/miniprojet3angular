import { Faculte } from "./faculte.model";

export class FaculteWrapper{
_embedded!: { facultes: Faculte[]};
}