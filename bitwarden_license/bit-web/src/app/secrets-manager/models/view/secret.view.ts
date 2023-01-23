import { SecretProjectView } from "./secret-project.view";

export class SecretView {
  id: string;
  organizationId: string;
  name: string;
  value: string;
  note: string;
  creationDate: string;
  revisionDate: string;
  projects: SecretProjectView[];
}
