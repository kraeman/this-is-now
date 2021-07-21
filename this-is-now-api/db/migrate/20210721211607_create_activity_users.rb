class CreateActivityUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :activity_users do |t|

      t.timestamps
    end
  end
end
