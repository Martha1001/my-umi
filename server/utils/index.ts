import serviceConf from '../config/service'

export const getServiceDomin = (serviceName: string) => {
	return serviceConf[process?.env?.DEPLOY_ENV || 'prd']?.[serviceName]?.domain
}
