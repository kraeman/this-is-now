class AddCreatorIdColumnToActivities < ActiveRecord::Migration[6.1]
  def change
    add_column :activities, :creator_id, :integer
  end
end
