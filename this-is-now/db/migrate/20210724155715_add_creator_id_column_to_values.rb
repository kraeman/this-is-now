class AddCreatorIdColumnToValues < ActiveRecord::Migration[6.1]
  def change
    add_column :values, :creator_id, :integer
  end
end
