(function($, $document) {
	"use strict";
	$document.on("dialog-ready", function() {
       $(".js-coral-pathbrowser-input").removeClass("js-coral-pathbrowser-input");
    });
	var _ = window._, Class = window.Class, CUI = window.CUI, RTE_LINK_DIALOG = "rtelinkdialog";
    // Remove validation class from the pathbrowser
	 $(".js-coral-pathbrowser-input").removeClass("js-coral-pathbrowser-input");


	if (CUI.rte.ui.cui.CuiDialogHelper.rteLinkExtended) {
		return;
	}
	var RTELinkBaseDialog = new Class({
		extend : CUI.rte.ui.cui.LinkBaseDialog,

		toString : "RTELinkBaseDialog",

		initialize : function(config) {
			this.superClass.initialize.call(this, config);

			this.$rteDialog = this.$container.find("[data-rte-dialog=link]");
			this.$rteDialog.find(".js-coral-pathbrowser-input").removeClass(
					"js-coral-pathbrowser-input");

		}
	});

	CUI.rte.ui.cui.CuiDialogHelper = new Class(
			{
				extend : CUI.rte.ui.cui.CuiDialogHelper,

				toString : "RTECuiDialogHelper",

				instantiateDialog : function(dialogConfig) {
					var type = dialogConfig.type;

					if (type !== RTE_LINK_DIALOG) {
						this.superClass.instantiateDialog.call(this,
								dialogConfig);
						return;
					}

					var $editable = $(this.editorKernel.getEditContext().root), $container = CUI.rte.UIUtils
							.getUIContainer($editable), dialog = new RTELinkBaseDialog();

					dialog.attach(dialogConfig, $container, this.editorKernel);

					return dialog;
				}
			});

	CUI.rte.ui.cui.CuiDialogHelper.rteLinkExtended = true;
})($, $(document));
