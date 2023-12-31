//平台属性管理模块请求文件
import request from '@/utils/request'

//获取1级分类列表
export const reqCategory1List = () => request({ url: '/admin/product/getCategory1', method: 'get' })

//获取2级分类列表
export const reqCategory2List = (category1Id) => request({ url: `/admin/product/getCategory2/${category1Id}`, method: 'get' })

//获取3级分类列表
export const reqCategory3List = (category2Id) => request({ url: `/admin/product/getCategory3/${category2Id}`, method: 'get' })

//获取平台属性的数据
export const reqAttrList = (category1Id, category2Id, category3Id) => request({ url: `/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`, method: 'get' })

//添加属性与属性值的接口
export const reqAddOrUpdateAttr = (data) => request({ url: '/admin/product/saveAttrInfo', method: 'post', data })











