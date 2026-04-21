<?php

declare(strict_types=1);

namespace Drupal\carbrand_core\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Configuration form for a zr worklog entity type.
 */
final class RevenueCSVImporterForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames(): array {
    return [
      'revenue_csv_importer.adminsettings',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId(): string {
    return 'revenue_csv_importer_admin_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state): array {
    $config = $this->config('revenue_csv_importer.adminsettings');

    $form['description'] = [
      '#markup' => $this->t('<p>Import contribution records from a CSV file. The CSV should contain the following columns: month, name, url, project, core</p>'),
    ];

    $form['csv_file'] = [
      '#type' => 'managed_file',
      '#title' => $this->t('CSV File'),
      '#description' => $this->t('Upload a CSV file with contribution records. Expected format: month, name, url, project, core. Project names will be extracted from URLs when possible.'),
      '#upload_location' => 'temporary://',
      '#upload_validators' => [
        'FileExtension' => ['extensions' => 'csv'],
        'FileSizeLimit' => ['fileLimit' => 10 * 1024 * 1024], // 10MB
      ],
      '#required' => TRUE,
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state): void {
    $config = $this->config('revenue_csv_importer.adminsettings');
    $config->setData($form_state->getValues())->save();
    parent::submitForm($form, $form_state);
  }

}
