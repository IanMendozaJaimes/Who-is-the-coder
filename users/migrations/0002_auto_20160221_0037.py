# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-02-21 00:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='reclutador',
            name='lenguajes',
        ),
        migrations.AddField(
            model_name='coder',
            name='primera',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='coder',
            name='tiempo',
            field=models.CharField(choices=[('completo', 'completo'), ('md', 'medio tiempo')], default='completo', max_length=255),
        ),
        migrations.AddField(
            model_name='organizador',
            name='primera',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='reclutador',
            name='primera',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='coder',
            name='lugarVive',
            field=models.CharField(default='', max_length=255),
        ),
    ]
