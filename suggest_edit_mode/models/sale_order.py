from odoo import api, fields, models

class SaleOrder(models.Model):
    _inherit = "sale.order"

    @api.onchange('payment_term_id')
    def _on_change_payment_term_id(self):
        for record in self:
            record = record if isinstance(record.id,int) else record._origin

            record.message_post_with_template(record.sale_order_template_id)