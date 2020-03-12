import { Model } from '@shiftcoders/dynamo-easy';
import { BaseDataModel } from './base.data';

@Model({ tableName: process.env.DYNAMO_DB_TABLE })
export class ImageDataModel extends BaseDataModel {
  imageId: string;
  originId: string;
  ext: string;
}
