var soap = require('soap'),
	log4js = require('log4js'),
	logger = log4js.getLogger(),
	item = require('./item');

var url = 'http://localhost:9000/salesOrderService?wsdl';

var args = {
	localityId: 3467,
	customerId: 1594727,
	memberId: 50030,
	memberName: 'ANDREA GERALDA ROSA',
	agentId: 52610,
	agentName: 'RENATA FIGUEIREDO RIBEIRO PITTELLI',
	managerId: 3396,
	managerName: 'FABIANA BELORIO FERREIRA',
	salesChannelId: 1,
	flagActiveSale: false,
	contactName: 'ROGERIO MORENO DA SILVA NOVO',
	contactPhoneNumber: '03432172884',
	requestChannel: 'TELEFONE',
	flagNotSendProtocol: true,
	user: 'admin_1',
	worklogRequest: {
		note: 'Teste',
		restrictionTypeId: 1
	},
	items: [{
		item: item
	}]
};

var wsdlOptions = {
	ignoredNamespaces: {
		namespaces: [],
		override: true
	}
};

var create = function() {

	soap.createClient(url, wsdlOptions, function(err, client) {

		if (!!err) {
			logger.error(err);
			return;
		}

		client.save(args, function(err, result) {			

			if (!!err) {
				logger.error(err);
				return;
			}

			logger.info(result);
		});
	});

};

var createSalesOrders = function(n) {

	if (n > 0) {

		for (var i = 0; i < n; i++) {

			create();			
		}
	}
};

//RUN
logger.info("	:::::::::::: Create SalesOrders	:::::::::::: ");
createSalesOrders(1);
