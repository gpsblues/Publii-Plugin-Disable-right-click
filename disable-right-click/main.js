class DisableRightClick {
	constructor (API, name, config) {
		this.API = API;
		this.name = name;
		this.config = config;
	}

	addInsertions () {
		this.API.addInsertion('publiiHead', this.addStyle, 1, this);
		this.API.addInsertion('publiiFooter', this.addCode, 1, this);
	}

	addStyle(rendererInstance) {
		if(this.config.cssSelection){
			return `<link rel="stylesheet" href="${rendererInstance.siteConfig.domain}/media/plugins/disable-right-click/disableRC.min.css">`;
		}
		return '';
	}

	addCode() {
		let myJS = '';
		if(this.config.jsSelection){
			myJS += `document.onselectstart=e=>e.preventDefault();`;
		}
		if(this.config.jsRightClick){
			myJS += `document.addEventListener("contextmenu",e=>e.preventDefault())`;
		}
		if(myJS){
			return `<script>${myJS}</script>`;
		}
		return '';
	}
}

module.exports = DisableRightClick;
