import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCharity1612199070361 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //realizar alterações
        await queryRunner.createTable(new Table({
            name: 'events',
            columns: [
                {
                   name: 'id',
                   type: 'integer',
                   unsigned: true,
                   isPrimary: true,
                   isGenerated: true,
                   generationStratey: 'increment'  
                },

                {
                    name: 'name',
                    type: 'varchar',
                },

                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },

                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },

                {
                     name: 'description',
                     type: 'text'
                },

                {
                    name: 'date_event',
                    type: 'date',
                },

                {
                    name: 'hour_event',
                    type: 'time',
                },

                {
                    name: 'estimated_value',
                    type: 'numeric',
                },

                {
                    name: 'value',
                    type: 'numeric',
                },

                {
                    name: 'contact',
                    type:'varchar',
                }

            ]

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //desfazer alterações 
        await queryRunner.dropTable('events');
    }

}
