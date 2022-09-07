export interface Props {
  /**
   * @description 状态类型
   * @default -
   */
  description?: {} | null | undefined;

  /**
   * 图片样式
   * @default Empty.PRESENTED_IMAGE_DEFAULT
   */
  image?: {} | null | undefined;

  /**
   * 图片大小(medium,small,mini)
   * @default -
   */
  imageStyle?: void;

  /**
   * @description 状态类型
   * @default default
   */
  type?: string;

  /**
   * @description 状态类型
   * @default default
   */
  test?: string;

  /**
   * @description 状态类型
   * @default default
   */
  text?: string;
}
